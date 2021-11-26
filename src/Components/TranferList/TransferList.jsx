import React, { Component, createElement } from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

//import "./TransferList.scss";

export class TransferList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      left: [0, 1, 2, 3],
      right: [4, 5, 6, 7],
    };
  }

  not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
  }

  intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
  }

  union(a, b) {
    return [...a, ...this.not(b, a)];
  }

  handleToggle(value) {
    const currentIndex = this.state.checked.indexOf(value);
    const newChecked = [...this.state.checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  }

  numberOfChecked(items) {
    return this.intersection(this.state.checked, items).length;
  }

  handleToggleAll(items) {
    if (this.numberOfChecked(items) === items.length) {
      this.setState({
        checked: this.not(this.state.checked, items),
      });
    } else {
      this.setState({
        checked: this.union(this.state.checked, items),
      });
    }
  }

  leftChecked() {
    return this.intersection(this.state.checked, this.state.left);
  }

  handleCheckedRight() {
    this.setState({
      right: this.state.right.concat(this.leftChecked()),
    });

    this.setState({
      left: this.not(this.state.left, this.leftChecked()),
    });

    this.setState({
      checked: this.not(this.state.checked, this.leftChecked()),
    });
  }

  rightChecked() {
    return this.intersection(this.state.checked, this.state.right);
  }

  handleCheckedLeft() {
    this.setState({
      left: this.state.left.concat(this.rightChecked()),
    });

    this.setState({
      right: this.not(this.state.right, this.rightChecked()),
    });

    this.setState({
      checked: this.not(this.state.checked, this.rightChecked()),
    });
  }

  customList(title, items) {
    return (
      <Card>
        <CardHeader
          //className={classes.cardHeader}
          avatar={
            <Checkbox
              onClick={() => this.handleToggleAll(items)}
              checked={
                this.numberOfChecked(items) === items.length &&
                items.length !== 0
              }
              indeterminate={
                this.numberOfChecked(items) !== items.length &&
                this.numberOfChecked(items) !== 0
              }
              disabled={items.length === 0}
              inputProps={{ "aria-label": "all items selected" }}
            />
          }
          title={title}
          subheader={`${this.numberOfChecked(items)}/${items.length} selected`}
        />
        <Divider />
        <List
          //className={classes.list}
          dense
          component="div"
          role="list"
        >
          {items.map((value) => {
            const labelId = `transfer-list-all-item-${value}-label`;

            return (
              <ListItem
                key={value}
                role="listitem"
                button
                onClick={() => this.handleToggle(value)}
              >
                <ListItemIcon>
                  <Checkbox
                    checked={this.state.checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`List item ${value + 1}`} />
              </ListItem>
            );
          })}

          <ListItem />
        </List>
      </Card>
    );
  }

  render() {
    return (
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item>{this.customList("Completed", this.state.left)}</Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Button
              variant="outlined"
              size="small"
              //className={classes.button}
              onClick={() => this.handleCheckedRight()}
              disabled={this.leftChecked().length === 0}
              aria-label="move selected right"
            >
              &gt;
            </Button>
            <Button
              variant="outlined"
              size="small"
              //className={classes.button}
              onClick={() => this.handleCheckedLeft()}
              disabled={this.rightChecked().length === 0}
              aria-label="move selected left"
            >
              &lt;
            </Button>
          </Grid>
        </Grid>
        <Grid item>{this.customList("Incomplete", this.state.right)}</Grid>
      </Grid>
    );
  }
}

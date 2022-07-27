import React from "react";
import ReactDragListView from "react-drag-listview";
import "antd/dist/antd.css";

import {Transfer} from "antd";


const dataSource = [];
for (let i = 0; i < 20; i++) {
  dataSource.push({
    key: i.toString(),
    title: `Item ${i}`,
  });
}

const targetKeys = dataSource
  .filter((item) => +item.key % 3 > 1)
  .map((item) => item.key);

export class ReactListViewComp extends React.Component {
  state = {
    targetKeys,
    selectedKeys: [],
  };

  handleChange = (nextTargetKeys) => {
    this.setState({ targetKeys: nextTargetKeys });
  };

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({
      selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys],
    });
  };

  getDragProps = () => ({
    onDragEnd: (fromIndex, toIndex) => {
      const targetKeys = [...this.state.targetKeys];
      const item = targetKeys.splice(fromIndex, 1)[0];
      targetKeys.splice(toIndex, 0, item);

      this.handleChange(targetKeys);
    },
    nodeSelector:
      ".ant-transfer-list:last-child .ant-transfer-list-content > div",
  });

  render() {
    const { targetKeys, selectedKeys } = this.state;

    return (
      <div>
        <ReactDragListView {...this.getDragProps()}>
          <Transfer
            dataSource={dataSource}
            titles={["Source", "Target"]}
            targetKeys={targetKeys}
            selectedKeys={selectedKeys}
            onChange={this.handleChange}
            onSelectChange={this.handleSelectChange}
            render={(item) => item.title}
            listStyle={{ height: 300 }}
          />
        </ReactDragListView>
      </div>
    );
  }
}

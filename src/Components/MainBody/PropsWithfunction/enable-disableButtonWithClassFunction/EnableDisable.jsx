import React, { Component } from 'react';

export default class EnableDisable extends Component {
    }
    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="ENTER"
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <button disabled={this.state.disabled}>SUBMIT</button>
                </form>
            </div>

        );
    }

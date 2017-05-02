/**
 * @file GroupView.jsx
 * @author houyl@jingoal.com yanwx@jingoal.com
 *
 * 滚动拆分分组
 * 实际监听滚动的组件，用来将子组件进行虚拟化
 */
import React, {Component, PropTypes} from 'react';
import {observer} from 'mobx-react';

@observer
class GroupView extends Component {
    static propTypes = {
        store: PropTypes.shape({
            id: PropTypes.number,
            top: PropTypes.number,
            height: PropTypes.number,
            data: PropTypes.object
        }),
        updateHeight: PropTypes.func,
        rowRenderer: PropTypes.func
    }

    static defaultProps = {};

    updateHeight() {
        if (!this.props.store.height) {
            this.props.updateHeight(this.props.store.id, this.element.offsetHeight);
        }
    }

    componentDidMount() {
        this.updateHeight()
    }

    componentDidUpdate() {
        this.updateHeight()
    }

    render() {
        if (this.props.store.inView) {
            return (
                <div ref={ref => { this.element = ref }}>
                    {
                        this.props.store.data.map(data =>
                            this.props.rowRenderer(data))
                    }
                </div>
            )
        }
        return <div style={{height: `${this.props.store.height}px`}}/>
    }
}

export default GroupView;

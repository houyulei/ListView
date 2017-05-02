/**
 *  @file ListView.jsx
 *  @author houyl@jingoal.com yanwx@jingoal.com
 *
 *  根据dataSource分组渲染
 */
import React, {Component, PropTypes} from 'react';
import {observer} from 'mobx-react';
import Scroller from 'silk-scroller';

import GroupView from './GroupView'

function throttle(func, wait) {
    let last = 0
    return function (...args) {
        const curr = +new Date()
        if (curr - last > wait) {
            func.apply(this, args)
            last = curr
        }
    }
}

@observer
class ListView extends Component {
    static propTypes = {
        rowHeight: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.func
        ]),
        /**
         * 分组大小
         */
        rowsInGroup: PropTypes.number,
        scrollTop: PropTypes.number,
        rowRenderer: PropTypes.func,
        dataSource: PropTypes.object // eslint-disable-line react/forbid-prop-types
    }

    static defaultProps = {
        rowsInGroup: 50,
        scrollTop: 0
    };

    constructor(props) {
        super(props);

        this.props.dataSource.set({
            rowHeight: this.props.rowHeight,
            rowsInGroup: this.props.rowsInGroup,
            scrollTop: this.props.scrollTop
        });
        this.props.dataSource.generate();

        this.updateScrollTop = throttle((evt) => {
            this.props.dataSource.updateScrollTop(evt.contentOffset.y)
        }, 200)

        this.updateGroupHeight = this.updateGroupHeight.bind(this);
    }

    updateGroupHeight(id, height) {
        this.props.dataSource.updateGroupHeight(id, height);
    }

    render() {
        const {
            rowHeight,
            rowsInGroup,
            scrollTop,
            rowRenderer,
            dataSource,
            onScroll,
            onScrollEnd,
            ...props
        } = this.props;


        return (
            <Scroller
                onScroll={this.updateScrollTop}
                onScrollEnd={this.updateScrollTop}
                {...props}
            >
                {
                    dataSource.groups.map((store, index) =>
                        <GroupView
                            key={index}
                            store={store}
                            rowRenderer={rowRenderer}
                            updateHeight={this.updateGroupHeight}
                        />)
                }
            </Scroller>
        )
    }
}

export default ListView;

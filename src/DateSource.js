/**
 * @file DateSource.js
 * @author houyl@jingoal.com
 *
 * 长列表数据模型(mobx)
 */
import {action, observable} from 'mobx';
import GroupState from './GroupState';

export default class DateSource {
    @observable groups = []

    scrollTop = 0

    constructor(value = []) {
        this.value = value;
        this.start = 0;
    }

    set(options) {
        Object.assign(this, options)
    }

    @action
    generate() {
        this.value.slice(this.start).forEach((data, index) => {
            const hashIndex = parseInt((this.start + index) / this.rowsInGroup, 10);
            if (this.groups.length === hashIndex) {
                this.groups[hashIndex] = new GroupState({
                    id: hashIndex,
                    top: this.groups[hashIndex - 1]
                        ? this.groups[hashIndex - 1].top + this.groups[hashIndex - 1].height
                        : 0,
                    scrollTop: this.scrollTop
                });
            }

            if (!this.rowHeight) {
                this.groups[hashIndex].height = null;
            }

            if (typeof this.rowHeight === 'number') {
                this.groups[hashIndex].height += this.rowHeight;
            }

            if (typeof this.rowHeight === 'function') {
                this.groups[hashIndex].height += this.rowHeight(data, index);
            }

            this.groups[hashIndex].data.push(data);
        })
        this.start = this.value.length;
    }

    @action updateGroupHeight(id, height) {
        this.groups[id].update({
            height,
            top: this.groups[id - 1]
                ? this.groups[id - 1].top + this.groups[id - 1].height : 0
        })
    }

    @action updateScrollTop(scrollTop) {
        this.scrollTop = scrollTop;
        this.groups.forEach(group => {
            group.update({
                scrollTop
            })
        })
    }

    @action
    append(values) {
        let arr = values;
        if (!Array.isArray(values)) {
            arr = [values];
        }

        this.value = this.value.concat(arr);

        this.generate();
    }

    @action
    replace(value) {
        this.value = value;
        this.start = 0;
        this.groups = [];
        this.generate();
    }

    @action
    clear() {
        this.value = [];
        this.start = 0;
        this.groups = [];
    }
}


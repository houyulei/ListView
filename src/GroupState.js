import {action, computed, observable} from 'mobx';

export default class GroupState {
    @observable id;

    @observable top = 0;

    @observable height = null;

    @observable data = [];

    @observable scrollTop = 0;

    @computed get inView() {
        if (this.height) {
            return this.scrollTop < -this.top + 1000
                && this.scrollTop > -this.top - this.height - 1000
        }
        return true
    }

    constructor(prop) {
        Object.assign(this, prop);
    }

    @action update(prop) {
        Object.assign(this, prop);
    }
}

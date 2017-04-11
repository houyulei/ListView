import {action, computed, observable} from 'mobx';

export default class GroupState {
    @observable id;

    @observable top = 0;

    @observable height = null;

    @observable data = [];

    @observable scrollTop = 0;

    @computed get inView() {
        if (this.height) {
            return this.scrollTop < -this.top + 2000
                && this.scrollTop > -this.top - this.height - 2000
        }
        return false
    }

    constructor(prop) {
        Object.assign(this, prop);
    }

    @action update(prop) {
        Object.assign(this, prop);
    }
}

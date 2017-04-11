

## 介绍

长列表组件

## 安装

```bash
$ npm install silk-listview --save
```

## 使用

```jsx
import ListView,{DateSource} from 'silk-listview';

const data = [];
for (let i = 0; i < 3000; i++) {
    data.push(i);
}
const dataSource = new DateSource(data);

class ListViewExample extends Component {

    constructor(props) {
        super(props);
        this.lastScrollTop = 0;
        this.state = {
            scrollTop: 0,
            dataSource
        }
    }

    refresh = (resolve) => {
        setTimeout(() => {
            const arr = [];
            for (let i = 0; i < 15; i++) {
                arr.push(i);
            }

            dataSource.replace(arr);

            resolve();
        }, 500)
    }

    loadMore = (resolve) => {
        const arr = [];
        for (let i = dataSource.value.length, len = dataSource.value.length + 15;
             i < len; i++) {
            arr.push(i);
        }

        dataSource.append(arr)
        resolve();
    }

    render() {
        return (
            <ListView
                dataSource={dataSource}
                rowRenderer={item => <div key={item} className="list-view-item">上拉下拉{item + 1}</div>}
                usePullRefresh
                pullRefreshAction={this.refresh}
                useLoadMore
                loadMoreAction={this.loadMore}
            />
        )
    }
}

ReactDOM.render(
    <ListViewExample />, document.getElementById('root')
)


```

## API

### props

| Property             | Description           | Type       | Default       |
|---------------- |----------------|----------|----------|
| dateSource         |    |  |   |
| rowHeight         |    |  |   |
| partitionSize         |      |  |   |
| scrollTop         |    |  |   |
| rowRenderer         |     | |   |




### dateSource

dataSource.append

dataSource.replace

dataSource.clear



import React, { Component } from 'react'
import shopData from './shop.data'
import PreviewCollection from '../../components/preview-collection/preview-collection.component'

class  ShopPage extends Component {

    state = {
        collections: shopData
    }
    render() {
        const {collections} = this.state
        return (
            <div>
                {collections.map(({id, ...otherCollectionProps}) => <PreviewCollection key={id} {...otherCollectionProps}/>)}
            </div>
        )
    }
}

export default ShopPage

import React, { Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as Ons from 'onsenui';
import * as ons from 'react-onsenui';
import { addHeadline } from '../Actions/headlineActions';
import AddressForm from '../Components/addressForm'
class Headline extends Component {
renderForm() {
return ( 
<section style={{textAlign: 'center', marginBottom: 10}}>
<AddressForm
headline={this.props.headline}
onSubmit={(headline) => {
this.props.addHeadline(headline);
Ons.notification.alert({
message: 'Расчет завершен',
title: ''
});
}}/>
</section>
)
}
render() {
return (
<ons.Page>
{::this.renderForm()}
</ons.Page>
);
}
}
function mapStateToProps (state) {
return state
}
function mapDispathToProps (dispath) {
return bindActionCreators({ 
 addHeadline, }, dispath)
}
export default connect(mapStateToProps, mapDispathToProps)(Headline);

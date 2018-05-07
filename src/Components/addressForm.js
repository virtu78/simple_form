
import * as ons from 'react-onsenui';
import Formsy from 'formsy-react';
import React, { Component } from 'react';
import { ValidationInput } from '../Components/validationInput';
const fontStyle = {
fontSize: '24px',
fontFamily: 'helvetica, arial, sans-serif',
fontWeight: 100
}
export default class ReviewForm extends Component {
render() {
return (
<AddressForm 
headline={this.props.headline}
onSubmit={(m) => this.props.onSubmit(m.headline)} 

/>
)
}
}

export class AddressForm extends Component {
constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = { canSubmit: false };
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

submit(model) {
this.props.onSubmit(model);
}

render() {
return (
<section style={{}}>
<Formsy.Form onValidSubmit={::this.submit} onValid={::this.enableButton} onInvalid={::this.disableButton}>
<ons.ListHeader style={fontStyle}>Кубатура экскаватора</ons.ListHeader>
<div className='reviews-form'>
<ValidationInput
name='headline'
validations='isCubatura'
validationError='Введите значение равное 50, 100, 150 м. куб'
onChange={(e) => this.setState({ headline: e.target.value })}
placeholder='Введите значение'
type='text' 
required/>
<p>
<button className='button' disabled={!this.state.canSubmit} >
<span>Вычислить</span>
</button>
</p>
</div>
</Formsy.Form>
</section>
)
}

}

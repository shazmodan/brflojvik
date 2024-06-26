import {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'

class ScrollToTop extends Component {
	static propTypes = {
		location: PropTypes.object,
		children: PropTypes.element,
	}

	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0)
		}
	}
  
	render() {
		return this.props.children
	}
}
  
export default withRouter(ScrollToTop)
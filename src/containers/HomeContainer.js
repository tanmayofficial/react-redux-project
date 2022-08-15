import { connect } from "react-redux/es/exports";
import Home from "../components/home/Home";
import { addToCart } from "../services/actions/action";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

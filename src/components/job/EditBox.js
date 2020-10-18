// import TextareaAutosize from "react-textarea-autosize";

state = {
  editing: false,
  textAreaValue: "",
  textAreaRows: 0,
};

setEditingTrue = () => {
  if (this.state.textAreaValue === "") {
    this.setState({ textAreaValue: this.props.job.summary });
  }
  let num = this.state.textAreaValue.split("\n").length;
  this.setState({ textAreaRows: num });
  this.setState({ editing: true });
};

setEditingFalse = () => {
  this.setState({ editing: false });
};

updateJobSummary = (e) => {
  this.props.updateJobSummary(this.state.textAreaValue, this.props.job.id);
  this.props.job.summary = this.state.textAreaValue;
  this.setEditingFalse();
};

textAreaUpdated = (e) => {
  this.setState({ textAreaValue: e.target.value });
};

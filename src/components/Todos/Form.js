import React from "react";

const Form = ({
  inputValue,
  setInputValue,
  handleSubmit,
  handleUpdate,
  clearTodo,
  isEditing,
  isLoading,
  len,
}) => {
  return (
    <>
      <form
        className="form"
        onSubmit={isEditing ? (e) => handleUpdate(e) : handleSubmit}
      >
        <div className="input-container">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="input"
            placeholder={"Add your new todo"}
          />
        </div>
        <button type="submit" className="submit" disabled={isLoading}>
          <i className="fa fa-plus"></i>
          {isEditing ? "" : ""}
        </button>
      </form>
      {/* <div
        style={{
          position: "fixed",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          bottom: 0,
          paddingTop: "10px",
        }}
      >
        <span style={{ fontSize: "15px" }}>
          You have pending {len.length} tasks
        </span>
        <button
          onClick={!isLoading ? () => clearTodo() : undefined}
          style={{
            marginBottom: "2%",
            padding: "5px",
            marginRight: "6%",
            cursor: "pointer",
          }}
        >
          Clear All
        </button>
      </div> */}
    </>
  );
};

export default Form;

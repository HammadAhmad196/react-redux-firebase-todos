import React from "react";

function Footer({ len, clearTodo, isLoading }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 0,
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
    </div>
  );
}

export default Footer;

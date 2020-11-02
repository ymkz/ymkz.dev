function Error404() {
  return (
    <>
      <div className="error-code">404</div>
      <style jsx>{`
        .error-code {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translateY(-50%) translateX(-50%);
          font-family: var(--pretty-font);
          font-size: 96px;
        }
      `}</style>
    </>
  )
}

export default Error404

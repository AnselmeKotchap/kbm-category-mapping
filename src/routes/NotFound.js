import kbm from "../kbm.svg";

export default function NotFound() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <img src={kbm} alt="Logo" width="120px" height="120px" />
      </div>
      <h1>404 Page Not Found</h1>
    </main>
  );
}

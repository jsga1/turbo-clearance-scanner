export default function Home() {
return (
<div
style={{
background: “#050505”,
minHeight: “100vh”,
color: “white”,
padding: “20px”,
fontFamily: “Arial”
}}
>
<h1
style={{
color: “#32ff7e”,
fontSize: “42px”,
fontWeight: “bold”
}}
>
TURBO CLEARANCE
  <p style={{ color: "#999" }}>
    UPC Scanner + Clearance Finder
  </p>
  <div
    style={{
      marginTop: "30px",
      background: "#111",
      borderRadius: "20px",
      padding: "20px",
      border: "1px solid #32ff7e"
    }}
  >
    <h2 style={{ color: "#32ff7e" }}>
      Demo Deal
    </h2>
    <p>Husky Tool Bag</p>
    <p>MSRP: $50</p>
    <p style={{ color: "#32ff7e", fontSize: "28px" }}>
      Lowest: $13
    </p>
    <p>Aisle 42 - Bay 6</p>
  </div>
</div>

);
}

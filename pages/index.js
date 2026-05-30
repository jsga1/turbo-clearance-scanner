export default function Home() {
  const deals = [
    {
      title: 'Husky Tool Bag',
      msrp: '$50',
      clearance: '$13',
      aisle: 'Aisle 42 • Bay 6',
      store: 'Home Depot Chicago',
    },
    {
      title: 'Milwaukee Drill Kit',
      msrp: '$199',
      clearance: '$49',
      aisle: 'Aisle 12 • Bay 4',
      store: 'Home Depot Cicero',
    },
  ];

  return (
    <div
      style={{
        background: '#050505',
        minHeight: '100vh',
        color: 'white',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <h1
            style={{
              color: '#32ff7e',
              fontSize: '42px',
              fontWeight: 'bold',
              marginBottom: '4px',
              marginTop: '0',
            }}
          >
            TURBO CLEARANCE
          </h1>
          <p style={{ color: '#999', margin: '0' }}>
            UPC Scanner + Clearance Finder
          </p>
        </div>
        <div
          style={{
            background: '#111',
            border: '1px solid #32ff7e',
            borderRadius: '16px',
            padding: '10px 16px',
            color: '#32ff7e',
            fontWeight: 'bold',
          }}
        >
          LIVE
        </div>
      </div>
      <div
        style={{
          marginTop: '24px',
          background: '#101010',
          borderRadius: '18px',
          padding: '18px',
          border: '1px solid #1f1f1f',
        }}
      >
        <input
          placeholder="Search UPC, SKU or Product"
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '14px',
            border: '1px solid #32ff7e',
            background: '#050505',
            color: 'white',
            fontSize: '16px',
            outline: 'none',
          }}
        />
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginTop: '14px',
          }}
        >
          <button
            style={{
              flex: 1,
              background: '#32ff7e',
              color: '#000',
              border: 'none',
              borderRadius: '14px',
              padding: '14px',
              fontWeight: 'bold',
              fontSize: '16px',
            }}
          >
            Scan UPC
          </button>
          <button
            style={{
              flex: 1,
              background: '#111',
              color: '#32ff7e',
              border: '1px solid #32ff7e',
              borderRadius: '14px',
              padding: '14px',
              fontWeight: 'bold',
              fontSize: '16px',
            }}
          >
            ZIP 60609
          </button>
        </div>
      </div>
      <h2
        style={{
          marginTop: '32px',
          color: '#32ff7e',
          fontSize: '24px',
        }}
      >
        Hot Clearance Deals
      </h2>
      {deals.map((deal, index) => (
        <div
          key={index}
          style={{
            marginTop: '18px',
            background: '#101010',
            borderRadius: '20px',
            padding: '20px',
            border: '1px solid #32ff7e',
            boxShadow: '0 0 20px rgba(50,255,126,0.15)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <h3 style={{ margin: 0 }}>{deal.title}</h3>
              <p style={{ color: '#888', marginTop: '6px', marginBottom: '0' }}>
                {deal.store}
              </p>
            </div>
            <div
              style={{
                background: '#32ff7e',
                color: '#000',
                padding: '8px 12px',
                borderRadius: '12px',
                fontWeight: 'bold',
              }}
            >
              74% OFF
            </div>
          </div>
          <div style={{ marginTop: '18px' }}>
            <p style={{ color: '#777', margin: '0' }}>MSRP: {deal.msrp}</p>
            <p
              style={{
                color: '#32ff7e',
                fontSize: '34px',
                fontWeight: 'bold',
                margin: '10px 0',
              }}
            >
              {deal.clearance}
            </p>
            <p style={{ color: '#bbb', margin: '0' }}>{deal.aisle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

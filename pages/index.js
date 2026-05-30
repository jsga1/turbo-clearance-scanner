import { useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');

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

  const filteredDeals = deals.filter((deal) =>
    deal.title.toLowerCase().includes(search.toLowerCase())
  );

  const fakeScanner = () => {
    setMessage('📷 Scanner opened... (demo mode)');
  };

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
      <h1
        style={{
          color: '#32ff7e',
          fontSize: '42px',
          fontWeight: 'bold',
        }}
      >
        TURBO CLEARANCE
      </h1>
      <p style={{ color: '#999' }}>
        UPC Scanner + Clearance Finder
      </p>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search product"
        style={{
          width: '100%',
          padding: '16px',
          marginTop: '20px',
          borderRadius: '12px',
          border: '1px solid #32ff7e',
          background: '#111',
          color: 'white',
          fontSize: '16px',
        }}
      />
      <button
        onClick={fakeScanner}
        style={{
          width: '100%',
          marginTop: '16px',
          padding: '16px',
          borderRadius: '12px',
          border: 'none',
          background: '#32ff7e',
          color: '#000',
          fontWeight: 'bold',
          fontSize: '18px',
        }}
      >
        Scan UPC
      </button>
      {message && (
        <p
          style={{
            marginTop: '14px',
            color: '#32ff7e',
          }}
        >
          {message}
        </p>
      )}
      <h2
        style={{
          marginTop: '30px',
          color: '#32ff7e',
        }}
      >
        Hot Deals
      </h2>
      {filteredDeals.map((deal, index) => (
        <div
          key={index}
          style={{
            background: '#111',
            marginTop: '18px',
            padding: '20px',
            borderRadius: '18px',
            border: '1px solid #32ff7e',
          }}
        >
          <h3>{deal.title}</h3>
          <p>MSRP: {deal.msrp}</p>
          <p
            style={{
              color: '#32ff7e',
              fontSize: '28px',
              fontWeight: 'bold',
            }}
          >
            {deal.clearance}
          </p>
          <p>{deal.aisle}</p>
          <p style={{ color: '#888' }}>
            {deal.store}
          </p>
        </div>
      ))}
    </div>
  );
}

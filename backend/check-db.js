const pool = require('./db');

(async () => {
  try {
    const contacts = await pool.query('SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 10');
    const quotes = await pool.query('SELECT * FROM quote_requests ORDER BY created_at DESC LIMIT 10');
    
    console.log('=== CONTACT MESSAGES ===');
    console.log('Total records:', contacts.rowCount);
    if (contacts.rowCount > 0) {
      contacts.rows.forEach((r, i) => {
        console.log(`\n${i+1}. Name: ${r.name}`);
        console.log(`   Email: ${r.email}`);
        console.log(`   Phone: ${r.phone}`);
        console.log(`   Message: ${r.message}`);
        console.log(`   Created: ${r.created_at}`);
      });
    } else {
      console.log('   (No contact messages yet)');
    }
    
    console.log('\n\n=== QUOTE REQUESTS ===');
    console.log('Total records:', quotes.rowCount);
    if (quotes.rowCount > 0) {
      quotes.rows.forEach((r, i) => {
        console.log(`\n${i+1}. Name: ${r.name}`);
        console.log(`   Email: ${r.email}`);
        console.log(`   Phone: ${r.phone}`);
        console.log(`   Facility: ${r.facility_type}`);
        console.log(`   Sq Ft: ${r.square_footage}`);
        console.log(`   Created: ${r.created_at}`);
      });
    } else {
      console.log('   (No quote requests yet)');
    }
    
  } catch (e) {
    console.error('❌ Error checking database:', e.message);
  } finally {
    await pool.end();
    process.exit(0);
  }
})();

import logo from '../assets/cup-of-drink.png'

function Navbar() {
  const style = {
    width: "80%",
    height: '80px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto 0 auto'
  }

  return (
    <div style={style}>
      <div style={{display:'flex', flexDirection:'row', gap:"20px", alignItems:'center'}}>
        <img src={logo} style={{ width: '42px' }} />
        <p style={{fontWeight:'bold', color:'#4f220e'}}>Kopi_Ko</p>
      </div>
      <div style={{width:'800px',color:'#4f220e', fontWeight:'bold'}}>
        <ul style={{listStyleType:'none', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <li>Home</li>
          <li>Shop</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact</li>

        </ul>
      </div>
    </div>
  )
}
export default Navbar;

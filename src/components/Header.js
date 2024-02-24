import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

const pages = ["Home", "Shop", "Products"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <div>
                <ul className='flex space-x-6'>
                  <li>
                    <Link to='/' className='hover:text-gray-300'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to='/shop' className='hover:text-gray-300'>
                      Shop
                    </Link>
                  </li>
                  <li className='relative group'>
                    <span className='cursor-pointer hover:text-gray-300'>
                      Products
                    </span>
                    <ul className='absolute hidden bg-gray-900 text-white p-4 rounded-lg w-48 group-hover:block'>
                      <li className='mt-2'>
                        <div>New Arrivals</div>
                      </li>
                      <li className='mt-2 hover:text-gray-300 '>
                        <Link to='/dresses'>Dresses</Link>
                      </li>
                      <li className='mt-2 hover:text-gray-300 '>
                        <Link to='/jackets'>Jackets</Link>
                      </li>
                      <li className='mt-2 hover:text-gray-300 '>
                        <Link to='/sweatshirts'>Sweatshirts</Link>
                      </li>
                      <li className='mt-2 hover:text-gray-300 '>
                        <Link to='/tops-tees'>Tops & Tees</Link>
                      </li>
                      <li className='mt-2 hover:text-gray-300 '>
                        <Link to='/party-dresses'>Party Dresses</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to='/contact' className='hover:text-gray-300'>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <div>
              <ul className='flex space-x-6'>
                <li>
                  <Link to='/' className='hover:text-gray-300'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/shop' className='hover:text-gray-300'>
                    Shop
                  </Link>
                </li>
                <li className='relative group'>
                  <span className='cursor-pointer hover:text-gray-300'>
                    Products
                  </span>
                  <ul className='absolute hidden bg-gray-900 text-white p-4 rounded-lg w-48 group-hover:block'>
                    <li className='mt-2'>
                      <div>New Arrivals</div>
                    </li>
                    <li className='mt-2 hover:text-gray-300 '>
                      <Link to='/dresses'>Dresses</Link>
                    </li>
                    <li className='mt-2 hover:text-gray-300 '>
                      <Link to='/jackets'>Jackets</Link>
                    </li>
                    <li className='mt-2 hover:text-gray-300 '>
                      <Link to='/sweatshirts'>Sweatshirts</Link>
                    </li>
                    <li className='mt-2 hover:text-gray-300 '>
                      <Link to='/tops-tees'>Tops & Tees</Link>
                    </li>
                    <li className='mt-2 hover:text-gray-300 '>
                      <Link to='/party-dresses'>Party Dresses</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/contact' className='hover:text-gray-300'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      {/* 
      <div>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/shop" className="hover:text-gray-300">Shop</Link></li>
          <li className="relative group">
              <span className="cursor-pointer hover:text-gray-300">Products</span>
              <ul className="absolute hidden bg-gray-900 text-white p-4 rounded-lg w-48 group-hover:block">
                <li className="mt-2"><div>New Arrivals</div></li>
                <li className="mt-2 hover:text-gray-300 "><Link to="/dresses">Dresses</Link></li>
                <li className="mt-2 hover:text-gray-300 "><Link to="/jackets">Jackets</Link></li>
                <li className="mt-2 hover:text-gray-300 "><Link to="/sweatshirts">Sweatshirts</Link></li>
                <li className="mt-2 hover:text-gray-300 "><Link to="/tops-tees">Tops & Tees</Link></li>
                <li className="mt-2 hover:text-gray-300 "><Link to="/party-dresses">Party Dresses</Link></li>
              </ul>
            </li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  </header>
  );
}

export default Header;

      */}
    </AppBar>
  );
};
export default Header;

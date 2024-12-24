import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const RecipeCard = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <Card sx={{minWidth: 300}}>
            <div className="chipMenu z-10 absolute flex justify-between">
                <div className="recipeTags">
                    <Chip label="Recipe tag" color='primary' className='m-1' size='small'/>
                    <Chip label="Recipe tag" color='primary' className='m-1'size='small'/>
                    <Chip label="Recipe tag" color='primary' className='m-1' size='small'/>
                </div>
                <div className="moreMenu">
                    <Button
                        id="basic-button"
                        variant='outlined'
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            Delete
                        </MenuItem>
                    </Menu>
                </div>
            </div>
           <CardMedia component='img' height = '180' image='https://mui.com/static/images/cards/paella.jpg'/>
           <CardContent>
                <div className="prose flex justify-between">
                    <p className='text-xl'>Recipe name</p>
                    <div className="estimatedTime">
                        <AccessTimeIcon />
                        <span className='pl-1'>1 hr</span>
                    </div>
                </div>
           </CardContent>
           <CardActions>
           <IconButton aria-label="add to favorites">
            </IconButton>
            <IconButton aria-label="share">
            </IconButton>
        </CardActions>
        </Card>
    )
}

export default RecipeCard
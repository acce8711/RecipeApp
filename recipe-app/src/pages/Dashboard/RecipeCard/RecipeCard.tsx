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
import './styles.css'
import { CardHeader } from '@mui/material';

export interface RecipeCardArgs {
    name: string
    tags: string[]
    time: string
}

const RecipeCard = ({name, tags, time}: RecipeCardArgs) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <Card>
            <CardHeader
                sx={{height: 40, padding: 1}}
                action={
                <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                }
            >
                hello
            </CardHeader>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
           <CardMedia component='img' height = '180' image='https://mui.com/static/images/cards/paella.jpg'/>
           <CardContent>
                <div className="prose flex flex-col">
                    <div className="text-section flex justify-between w-full">
                        <p className='text-xl'>
                            {name}
                        </p>
                        <div className="estimatedTime">
                            <AccessTimeIcon />
                            <span className='pl-1'>{time}</span>
                        </div>
                    </div>
                    <div className="tags flex pt-4">
                        {tags.map(tag => 
                            <Chip label={tag}/>
                        )}
                    </div>
                </div>
           </CardContent>
        </Card>
    )
}

export default RecipeCard
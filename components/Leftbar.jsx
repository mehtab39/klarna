import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1)
}));

export default function Leftbar() {
    return (
        <div style={{minWidth: '300px', padding: "20px"}}>
            <h2>Categories</h2>
            <Stack
                direction="column"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={1}
            >
                <Item>All</Item>
                <Item>Babies & Kids</Item>
                <Item>Clothing & Apparel</Item>
                <Item>Computers & Accessories</Item>
                <Item>Consumer Electronics</Item>
                <Item>Gifts</Item>
                <Item>Health & Beauty</Item>
                <Item>Holidays & Occasions</Item>
                <Item>Household</Item>
                <Item>Media</Item>
                <Item>See all 14</Item>
            </Stack>
        </div>
    );
}

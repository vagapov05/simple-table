import React from 'react';

import { visuallyHidden } from '@mui/utils';
import { Box, TableCell, TableHead, TableRow, TableSortLabel, } from '@mui/material';


const headCells = [
   {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Dessert (100g serving)',
   },
   {
      id: 'calories',
      numeric: true,
      disablePadding: false,
      label: 'Calories',
   },
   {
      id: 'fat',
      numeric: true,
      disablePadding: false,
      label: 'Fat (g)',
   },
   {
      id: 'carbs',
      numeric: true,
      disablePadding: false,
      label: 'Carbs (g)',
   },
   {
      id: 'protein',
      numeric: true,
      disablePadding: false,
      label: 'Protein (g)',
   },
];

function EnhancedTableHead(props) {
   const { order, orderBy, onRequestSort } = props;
   const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
   };
 
   return (
      <TableHead>
         <TableRow>
            {headCells.map((headCell) => (
               <TableCell
                  key={headCell.id}
                  align={headCell.numeric ? 'right' : 'left'}
                  sortDirection={orderBy === headCell.id ? order : false}
               >
                  <TableSortLabel
                     active={orderBy === headCell.id}
                     direction={orderBy === headCell.id ? order : 'asc'}
                     onClick={createSortHandler(headCell.id)}
                  >
                     {headCell.label}
                     {orderBy === headCell.id ? (
                     <Box component="span" sx={visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                     </Box>
                     ) : null}
                  </TableSortLabel>
               </TableCell>
            ))}
         </TableRow>
      </TableHead>
   );
}

export default EnhancedTableHead;

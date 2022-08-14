/**
 * @file
 * Generate a List.
 */

 import React from 'react';
 import { cleanLabel } from './cleanLabel';
 
 /**
  * @param
  */
 export function List(props) {
 
   return (
    <ul>
      {props.menuItem.map((item, itemKey) => (
        <li key={itemKey} id={cleanLabel(item.title)}>
          {item.url !== undefined && <a href={item.url}>{item.title}</a>} 
          {item.url === undefined && <span>{item.title}</span>}     
        </li>
      ))}
    </ul>
   );
 }
 
 export default List;
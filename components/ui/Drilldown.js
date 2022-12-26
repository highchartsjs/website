
const domain = process.env.NEXT_PUBLIC_DOMAIN + '/';

import { Link } from 'next/link';

import { useState } from "react";


function getLink(current, parent) {
   let props = {
      href: current.url
   };

   if (props.href === undefined) {
      let code = current.code;
      if (code.startsWith('http')) {
         props.href = code;
         props.target = '_blank';
      } else if (code.startsWith('/')) {
         props.href = process.env.NEXT_PUBLIC_DOMAIN + code;
      } else {
         props.href = domain + parent + '/' + code;
      }
   } else {
      props.target = '_blank'
   }

   
   return props;
}


export default function Drilldown({ items, options }) {
   const [current, setCurrent] = useState('');
   return <ul className={"nav navbar-nav " + (options && options.className)}>
      {items.map((item, i) =>
         item.items ?
            <li key={item.code || item.url} className={"dropdown" + (current === item.code ? " open" : '')} onMouseEnter={() => setCurrent(item.code)} onMouseLeave={() => setCurrent()}>
               <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{item.name}</a>
               <ul className="dropdown-menu">
                  {
                     item.items.map(child =>
                        <li key={child.code || i}>
                           <a {...getLink(child, item.code)}>{child.name}</a>
                        </li>
                     )
                  }
               </ul>
            </li> :
            <li className={"nav-item" + (item.className ? ' ' + item.className : '')} key={item.code}>
               <a href={domain + item.code}>{item.name}</a>
            </li>
      )}
   </ul>
}



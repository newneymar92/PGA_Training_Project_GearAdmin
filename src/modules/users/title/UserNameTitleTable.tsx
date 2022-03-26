import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

export default function UserNameTitleTable(props: any) {
  const { title, sortCustom } = props;
  const [orderBy, setOrderBy] = useState('DESC');
  const [display, setDisplay] = useState('none');
  return (
    <div
      style={{ cursor: 'pointer' }}
      onClick={() => {
        sortCustom(1, 25, 'fistName', orderBy);
        setDisplay('inline-block');
        if (orderBy == 'DESC') {
          setOrderBy('ASC');
        } else if (orderBy == 'ASC') {
          setOrderBy('DESC');
        }
      }}
    >
      {title}
      {orderBy == 'ASC' ? (
        <ArrowUpOutlined style={{ display: display }} />
      ) : (
        <ArrowDownOutlined style={{ display: display }} />
      )}
    </div>
  );
}

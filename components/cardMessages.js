import React, { memo, useContext } from 'react';
import CardMessage from 'components/cardMessage';

const CardMessages = ({ context, messageId }) => {
  const { data, handleUpdateStatus, loading } = useContext(context);
  return (
    <>
      {data.length > 0 && data.map((d, i) => (
        <CardMessage
          key={i}
          message={d}
          updateStatus={handleUpdateStatus}
          loading={d.id == messageId ? loading : false}
        />
      ))}
    </>
  );
};

export default memo(CardMessages);
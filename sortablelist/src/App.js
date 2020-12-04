import React, { useState } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { ReactSortable } from 'react-sortablejs';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 300px;
  padding: 1rem 0;
  border-radius: 1rem;
  background: white;
  box-shadow: 0 4px 15px ${rgba("black", 0.05)};
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 1rem;
`;

const ItemImage = styled.img`
  width: 44px;
  height: 44px;
  padding: 2px;
  margin-right: 0.75rem;
  border-radius: 50%;
  border: 1px solid ${rgba("black", 0.05)};
`;

const ItemTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${rgba("black", 0.85)};
`;

const ItemSubtitle = styled.div`
  color: ${rgba("black", 0.38)};
  font-size: 0.75rem;
`;

const ItemLikes = styled.div`
  display: flex;
  align-items: center;
  font-size 0.75rem;
  color: ${rgba("black", 0.38)};

  & > i {
    margin-right: 0.25rem;
    font-size: 1rem;
    color: #fe0f7c;
  }
`;

const SortableList = () =>{
  const [state, setState] = useState([
    {
      id: 1,
      title: "James Dean",
      subtitle: "Master Programmer",
      likes: 100
    },
    {
      id: 2,
      title: "Razer USERRRR",
      subtitle: "I use razer laptops",
      likes: 900
    },
    {
      id: 3,
      title: "Daniel C",
      subtitle: "Not a Master Programmer",
      likes: 1700
    },
    {
      id: 4,
      title: "DaringIndiviual",
      subtitle: "New Here :)",
      likes: 20
    },
  ]);

  return (
    <Card>
      <ReactSortable list={state} setList={setState}>
        {state.map(item => (
          <Item key={item.id}>
            <ItemImage src="https://picsum.photos/44/44"/>
            <div style={{ flex: 1 }}>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemSubtitle>
                {item.subtitle}
              </ItemSubtitle>
            </div>
            <ItemLikes>
              <i
                className="material-icons-outlined">
                <FavoriteOutlinedIcon />
              </i>
              <span>{item.likes}</span>
            </ItemLikes>
          </Item>
        ))}
      </ReactSortable>
    </Card>
  )
};

export default SortableList;
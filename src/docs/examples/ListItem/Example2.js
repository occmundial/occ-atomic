/* Render a list with bullets as svgs */
import React from 'react';
import { ListItem, Text } from '@occmundial/occ-atomic';

export default function Example2() {
    const bullet = (
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20">
                      <circle cx="6" cy="10" r="3" fill="#222222" fillRule="evenodd"/>
                    </svg>
                  );
    const biggerBullet = (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 12 20">
                      <circle cx="6" cy="10" r="3" fill="#222222" fillRule="evenodd"/>
                    </svg>
                  );
    return (
        <ul>
          <ListItem svg={bullet}>
            <Text>Miembro 1</Text>
          </ListItem>
          <ListItem svg={bullet}>
            <Text>Miembro 2</Text>
          </ListItem>
          <ListItem svg={bullet}>
            <Text>Miembro 3</Text>
          </ListItem>
          <ListItem svg={bullet}>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris justo, feugiat a erat vel, finibus accumsan lorem. Vestibulum ut commodo elit, eget viverra purus. Fusce feugiat libero ac felis vulputate egestas. Mauris non malesuada lacus. Fusce vitae tellus vel magna iaculis vehicula ac vitae mi. Vivamus tincidunt accumsan diam at semper. Fusce in orci eu sem fermentum fermentum sed at odio.</Text>
          </ListItem>
          <ListItem svg={biggerBullet}>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris justo, feugiat a erat vel, finibus accumsan lorem. Vestibulum ut commodo elit, eget viverra purus. Fusce feugiat libero ac felis vulputate egestas. Mauris non malesuada lacus. Fusce vitae tellus vel magna iaculis vehicula ac vitae mi. Vivamus tincidunt accumsan diam at semper. Fusce in orci eu sem fermentum fermentum sed at odio.</Text>
          </ListItem>
        </ul>
    );
}
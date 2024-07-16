/* Grid */
import React from 'react';
import { Grid, colors, Card, grid, WindowSize } from '@occmundial/occ-atomic';

function Example2({ winWidth }) {
  return (
    <Grid style={{ background: colors.grey1 }}>
      <Grid.Row>
        <Grid.Col
          xxs={{ col: 3 }}
          xs={{ col: 6 }}
          sm={{ col: 3 }}
          md={{ col: 3 }}
          lg={{ col: 3 }}
          xl={{ col: 3 }}
        >
          <Card
            noPadding={winWidth < grid.xs}
            style={{ textAlign: 'center', borderRadius: 0 }}
          >
            {' '}
            1{' '}
          </Card>
        </Grid.Col>
        <Grid.Col
          xxs={{ col: 3 }}
          xs={{ col: 6 }}
          sm={{ col: 3 }}
          md={{ col: 3 }}
          lg={{ col: 3 }}
          xl={{ col: 3 }}
        >
          <Card
            noPadding={winWidth < grid.xs}
            style={{ textAlign: 'center', borderRadius: 0 }}
          >
            {' '}
            2{' '}
          </Card>
        </Grid.Col>
        <Grid.Col
          xxs={{ col: 3 }}
          xs={{ col: 6 }}
          sm={{ col: 3 }}
          md={{ col: 3 }}
          lg={{ col: 3 }}
          xl={{ col: 3 }}
        >
          <Card
            noPadding={winWidth < grid.xs}
            style={{ textAlign: 'center', borderRadius: 0 }}
          >
            {' '}
            3{' '}
          </Card>
        </Grid.Col>
        <Grid.Col
          xxs={{ col: 3 }}
          xs={{ col: 6 }}
          sm={{ col: 3 }}
          md={{ col: 3 }}
          lg={{ col: 3 }}
          xl={{ col: 3 }}
        >
          <Card
            noPadding={winWidth < grid.xs}
            style={{ textAlign: 'center', borderRadius: 0 }}
          >
            {' '}
            4
          </Card>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
}

export default WindowSize(Example2);

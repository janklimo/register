import { Container } from 'components'
import { Box, Grid } from 'theme-ui'
import Balances from './components/balances'
import Overview from './components/overview'
import Stake from './components/stake'
import Unstake from './components/unstake'

const Staking = () => (
  <Container pb={4}>
    <Grid columns={[1, 1, 1, '2fr 1.5fr']} gap={[3, 5]}>
      <Box>
        <Grid columns={[1, 2]} gap={[1, 4]} mb={[1, 4]}>
          <Stake />
          <Unstake />
        </Grid>
        <Balances />
      </Box>
      <Overview />
    </Grid>
  </Container>
)

export default Staking

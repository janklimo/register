import { Container } from 'components'
import { FormProvider, useForm } from 'react-hook-form'
import { Box, Grid } from 'theme-ui'
import BackingForm from './components/BackingForm'
import StakingToken from './components/StakingToken'
import TokenForm from './components/TokenForm'

const defaultValues = {
  // token params
  name: '',
  symbol: '',
  ownerAddress: '',
  // backing params
  tradingDelay: '',
  auctionLength: '',
  backingBuffer: '',
  maxTradeSlippage: '',
  dustAmount: '',
  issuanceRate: '',
  // other
  maxTradeVolume: '1000000',
  rTokenDist: '40', // %
  rsrDist: '60', // %
  rewardPeriod: '604800', // seconds
  rewardRatio: '0.02284', // ? ask
  unstakingDelay: '1209600', // seconds 1 week
  oneshotPauseDuration: '864000', // seconds 10 days
  minBidSize: '',
}

const Deploy = () => {
  const form = useForm({
    mode: 'onBlur',
    defaultValues,
  })

  return (
    <FormProvider {...form}>
      <Container sx={{ maxWidth: 1024, margin: 'auto' }}>
        <Grid gap={5} columns={[1, 2]}>
          <Box>
            <TokenForm mb={4} />
            <BackingForm />
          </Box>
          <Box>
            <StakingToken />
          </Box>
        </Grid>
      </Container>
    </FormProvider>
  )
}

export default Deploy

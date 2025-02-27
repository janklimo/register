import Analytics from 'components/analytics/Analytics'
import ToastContainer from 'components/toaster-container/ToastContainer'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Updater from 'state/updater'
import Web3Provider from 'state/web3'
import { ThemeProvider } from 'theme-ui'
import { ROUTES } from 'utils/constants'
import Auctions from 'views/auctions'
import Deploy from 'views/deploy'
import Home from 'views/home'
import Management from 'views/settings'
import Overview from 'views/overview'
import Staking from 'views/staking'
import Tokens from 'views/tokens/Tokens'
import Layout from './components/layout'
import LanguageProvider from './i18n'
import { theme } from './theme'
import Issuance from './views/issuance'
import GovernanceSetup from 'views/deploy/components/Governance'
import GovernanceProposal from 'views/governance/views/proposal'
import Governance from 'views/governance'
import ProposalDetail from 'views/governance/components/ProposalDetail'
import GovernanceProposalDetail from 'views/governance/views/proposal-detail'

/**
 * App Entry point - Handles views routing
 *
 * @returns {JSX.Element}
 */
const App = () => (
  <Router>
    <Analytics />
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <ToastContainer />
        <Web3Provider>
          <Updater />
          <Layout>
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.OVERVIEW} element={<Overview />} />
              <Route path={ROUTES.ISSUANCE} element={<Issuance />} />
              <Route path={ROUTES.STAKING} element={<Staking />} />
              <Route path={ROUTES.AUCTIONS} element={<Auctions />} />
              <Route path={ROUTES.DEPLOY} element={<Deploy />} />
              <Route path={ROUTES.SETTINGS} element={<Management />} />
              <Route
                path={ROUTES.GOVERNANCE_SETUP}
                element={<GovernanceSetup />}
              />
              <Route path={ROUTES.TOKENS} element={<Tokens />} />
              <Route path={ROUTES.GOVERNANCE} element={<Governance />} />
              <Route
                path={ROUTES.GOVERNANCE_PROPOSAL}
                element={<GovernanceProposal />}
              />
              <Route
                path={`${ROUTES.GOVERNANCE_PROPOSAL}/:proposalId`}
                element={<GovernanceProposalDetail />}
              />
            </Routes>
          </Layout>
        </Web3Provider>
      </LanguageProvider>
    </ThemeProvider>
  </Router>
)

export default App

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '5px 5px 5px 0',
  },
  ratingBox: {
    display: 'flex', justifyContent: 'space-between',
  },
  priceBox: {
    display: 'flex', justifyContent: 'space-between',
  },
  rankBox: {
    display: 'flex', justifyContent: 'space-between',
  },
  awardBox: {
    display: 'flex', justifyContent: 'space-between',
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
}));
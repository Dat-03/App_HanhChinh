import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';

Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    height: Device.getDeviceWithScreen() * 0.15,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0,
    backgroundColor: colors.colorMain,
  },
  viewRow: {
    flexDirection: 'row',
  },
  viewCenterHeader: {
    justifyContent: 'center',
    alignItems: 'baseline',
    flexDirection: 'row',
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  viewTextLeft: {
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  textTitle: {
    fontSize: normalize(20),
    lineHeight: normalize(35.2),
    color: colors.white,
    marginStart: normalize(50),
    fontWeight: 'bold',
    width: normalize(200),
    textAlign: 'center',
  },

  rightIcon: {
    color: colors.black,
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'baseline',
    flexDirection: 'row',
  },
  rightIconLeft: {
    marginRight: normalize(20),
  },
  rightIcon2: {
    marginRight: normalize(10),
    marginTop: normalize(3),
  },
  profileImage: {
    width: normalize(36),
    height: normalize(36),
    borderRadius: normalize(26),
    left: normalize(20),
  },
  textFullName: {
    color: colors.white,
    fontSize: normalize(18),
    left: normalize(28),
    top:normalize(10)
  },
  textUserStatus: {
    color: colors.grey4,
    fontSize: normalize(9),
    left: normalize(28),
  },
  button: {
    color: colors.primary,
  },
}));

export default useStyles;

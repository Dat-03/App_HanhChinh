import {View, ScrollView} from 'react-native';
import React from 'react';
import ButtonCustom from '../../../../../../components/customs/Button';
import useStyles from './styles';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import {useAppDispatch} from '../../../../../../hooks';
import {ReportActions} from '../../../../../../redux';

const ButtonContent: React.FC = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();

  const handleReport = () => {
    dispatch(ReportActions.clearReport());
    NavigationService.navigate(routes.PROBLEM);
  };
  return (
    <ScrollView style={styles.scrollView}>
      <ButtonCustom
        textButton="Sự cố cần hỗ trợ"
        name="edit"
        type="font-awesome-5"
        color="#ec449c"
        size={25}
        onPressButton={handleReport}
      />
      <ButtonCustom
        textButton="Tính sẵn sàng phòng học"
        name="clipboard-list"
        type="font-awesome-5"
        color="#ec449c"
        size={25}
        onPressButton={() => NavigationService.navigate(routes.STATISTICAL)}
      />
    </ScrollView>
  );
};

export default ButtonContent;

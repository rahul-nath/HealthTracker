import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import NativeTachyons, {styles as s} from "react-native-style-tachyons";
import { Button } from 'react-native-elements';

NativeTachyons.build({
    /* REM parameter is optional, default is 16 */
    rem: Dimensions.get('window').width > 340 ? 18 : 16,
    /* fontRem parameter is optional to allow adjustment in font-scaling. default falls back to rem */
    fontRem: 20
}, StyleSheet);

// const ButtonExample = () => (
//   <WingBlank>
//     <Button>default</Button><WhiteSpace />
//     <Button disabled>default disabled</Button><WhiteSpace />
//     <Button type="primary">primary</Button><WhiteSpace />
//   </WingBlank>
// );

class App extends React.Component {

  render() {

    return (
      <View style={[s.ba, s.jcfs, s.pa2]}>
         <Text style={[s.white, s.f5, s.tc]}>
             Health Tracker
         </Text>
         <Button/>
      </View>
    );
  }
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// <Button type="primary" disabled>primary disabled</Button><WhiteSpace />
//
// <Button type="warning">warning</Button><WhiteSpace />
// <Button type="warning" disabled>warning disabled</Button><WhiteSpace />
//
// <Button loading>loading button</Button><WhiteSpace />
// <Button icon="check-circle-o">with icon</Button><WhiteSpace />
// <Button icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" alt="" />}>with custom icon</Button><WhiteSpace />
//
// {/* <Button activeStyle={false}>无点击反馈</Button><WhiteSpace /> */}
// {/* <Button activeStyle={{ backgroundColor: 'red' }}>custom feedback style</Button><WhiteSpace /> */}
//
// <WhiteSpace />
// <Button type="primary" inline style={{ marginRight: '4px' }}>inline primary</Button>
// {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
// <Button type="ghost" inline style={{ marginRight: '4px' }} className="am-button-borderfix">inline ghost</Button>
//
// <WhiteSpace />
// <Button type="primary" inline size="small" style={{ marginRight: '4px' }}>primary</Button>
// <Button type="primary" inline size="small" disabled>primary disabled</Button>
// <WhiteSpace />
// <Button type="ghost" inline size="small" style={{ marginRight: '4px' }}>ghost</Button>
// {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
// <Button type="ghost" inline size="small" className="am-button-borderfix" disabled>ghost disabled</Button>

export default App

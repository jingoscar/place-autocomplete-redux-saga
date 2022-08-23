import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: '#EAE7F8',
    },
    placeItem: {
      padding: 20,
  },
  placeName: {
      fontSize: 15,
  },
  
  searchBar: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#010101',
    borderRadius: 30,
    padding: 20,
    height: 40,
    fontSize: 15,
    
},
emptyListMsgContainer: {
    marginTop: 20,
    marginBottom: 20,
},
emptyListMsgText: {
    fontSize: 15,
    textAlign: 'center',
},
resetButton: {
    margin: 10,
},

content: {
    fontSize: 18,
    textAlign: 'center',
},
mapContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
   
},
map: {
    ...StyleSheet.absoluteFillObject,
},

});

export default styles;
import {StyleSheet} from 'react-native';

export const GobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    borderBottomColor: '#06f',
    borderBottomWidth: 2,
    width: '100%',
    height: 50,
  },

  inputLabel: {
    fontSize: 18,
  },

  card: {
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 10,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

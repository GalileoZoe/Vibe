
import { StyleSheet } from "react-native";

const secondary ='#111';
const primary='#fafafa';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  containerblack: {
    flex: 1,
    backgroundColor: secondary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },

  containerblue: {
    flex: 1,
    backgroundColor:"black",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  containerapp: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    marginTop:0
  },
  containerwhite: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },

  titles: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,

  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: secondary,
  fontFamily: 'System',
},
  titlewhite: {
    fontSize: 25,
    fontWeight: 'bold',
    color: primary,
  fontFamily: 'System',
},

  subtitle: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#e0e0e0', 
    borderRadius: 50,
    padding: 5,
    width:200,
    fontSize: 15,
    textAlign: 'center',
    alignSelf: 'center',
  },
  inputprofiletitle: {
    backgroundColor: 'transparent', 
    borderRadius: 10,
    padding: 10,
    fontSize: 25,
    fontWeight:'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  inputprofile: {
    backgroundColor: 'transparent', 
    borderRadius: 10,
    padding: 10,
    fontSize: 25,
    textAlign: 'center',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: secondary, 
    padding: 15,
    borderRadius: 50,
    marginBottom: 10,
    minWidth: 150,
    width:'70%',
    alignItems: 'center',
    color:'#fafafa'

  },
  buttonblue: {
    backgroundColor: primary, 
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    minWidth: 150,
    width:'70%',
    alignItems: 'center',

  },
  buttonwhite: {
    backgroundColor:'whitesmoke', // Darker black for buttons
    padding: 15,
    borderRadius: 50,
    marginVertical:20,
    width: '50%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  buttontextcart: {
    color: 'whitesmoke',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttontext: {
    color: 'whitesmoke',
    fontSize: 15,
  },
  buttontexts: {
    color: '#fff',
    fontSize: 8,
    fontWeight: 'bold', 
  },
  buttontextblack: {
    color: secondary,
    fontSize: 18,
  },
  buttontextblue: {
    color: primary,
    fontSize: 15,
    fontWeight:'600',
    textAlign: 'center',
 
  },
  // buttontextblack: {
  //   color: '#000',
  //   fontSize: 15,
  //   fontWeight:'600',
  //   textAlign: 'center',
 
  // },
  registerButton: {
    backgroundColor: '#d32f2f', // Regular black for register button
  },

  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 20,
  },
  iconButton: {
    padding: 10,
    borderRadius: 30,
  },
  iconText: {
    fontSize: 30,
    color:'whitesmoke',
    bottom:20
  },
  scanner: {
    alignSelf: 'center',
    width: '20%',
    height: 300,
    margin: -100,
    padding: -100,
    transform: [{ rotate: '90deg' }], 
  },
  ticketItem: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 5,
  },

  ticketTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },

  ticketText: {
    fontSize: 16,
  },
  backButton: {
    marginTop: 20,
    alignSelf: 'center',
  },

  header: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonsContainer: {
    margin: 'auto'
  },
  img: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  iconblack: {
    fontSize: 40,
    fontWeight: '100',
    color: secondary,
    alignItems: 'center',
    marginVertical: 15,
  },
  iconblue: {
    fontSize: 40,
    fontWeight: '100',
    color: primary,
    alignItems: 'center',
    marginVertical: 15,
  },
  icon: {
    fontSize: 40,
    fontWeight: '100',
    color: secondary,
    alignItems: 'center',
    marginVertical: 15,
  },
  text: {
    color: secondary,
    textAlign: 'center',
    marginBottom: 15,
  },
  texts: {
    color: secondary,
    textAlign: 'center',
    marginBottom: 10,
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  inputblacklogin: {
    width: '90%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    backgroundColor: 'whitesmoke',
    borderColor: 'whitesmoke',
    borderRadius: 50,
  },
  item: {
    alignItems: 'center',
    marginBottom: 20,
  },
  margin: {
    marginTop: 100,
  },
  loading: {
    marginTop: 20,
  },
  buttonmain: {
    backgroundColor: secondary, // Color de fondo rojo
    borderRadius: 10,
    margin: 10,
    padding: 40,
    alignItems: 'center',
    width: '180%', // Ancho del botón
  },
  buttonmainblack: {
    backgroundColor: secondary, // Color de fondo rojo
    borderRadius: 10,
    margin: 10,
    padding: 40,
    alignItems: 'center',
    width: 180, // Ancho del botón
  },
  buttonmainblue: {
    backgroundColor: primary, // Color de fondo rojo
    borderRadius: 10,
    margin: 10,
    padding: 40,
    alignItems: 'center',
    width: '40%', // Ancho del botón
  },
  buttonlistblack: {
    backgroundColor: secondary, // Color de fondo rojo
    borderRadius: 10,
    margin: 10,
    padding: 40,
    alignItems: 'center',
    width: 180, // Ancho del botón
  },
  buttonlistblue: {
    backgroundColor: 'whitesmoke', // Color de fondo rojo  
    padding: 30,
    alignItems: 'center',
    width: '100%', // Ancho del botón
    borderBottomColor: 'black',
    borderBottomWidth:0.5,
  },
  buttoncontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  headermain: {
    backgroundColor: secondary,
    width: '100%',
    paddingTop: 20,
    alignItems: 'center',
  },
  headermainblack: {
    backgroundColor: secondary,
    width: '100%',
    paddingTop: 20,
    alignItems: 'center',
  },
  headermainblue: {
    backgroundColor: primary,
    width: '100%',
    paddingTop: 20,
    alignItems: 'center',
  },
  containerwhitemain: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleblackmain: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  marginvertical: {
    marginVertical: 30,
  },
  marginVertical: {
    marginVertical: 10,
  },
  cardblack: {
    flex: 1,
    margin: 8,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'space-between',
  },
  card: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden', // Asegura que el fondo respete los bordes blackondeados
    elevation: 3, // Sombra para Android
    backgroundColor: '#fff',
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    maxHeight:150
  },
  cardcart: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden', // Asegura que el fondo respete los bordes blackondeados
    elevation: 3, // Sombra para Android
    backgroundColor: '#fff',
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    maxHeight:1000
  },
  cardblue: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden', // Asegura que el fondo respete los bordes blackondeados
    elevation: 3, // Sombra para Android
    backgroundColor:'rgba(57, 117, 230, 0.38)',
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardgreen: {
    flex: 1,
    borderRadius: 8,
    margin: 8,
    padding: 16,
    borderColor: 'green',
    borderWidth: 0.5,
    backgroundColor: '#E8F5E9',
    justifyContent: 'space-between',
  },
  // cardblack: {
  //   flex: 1,
  //   margin: 8,
  //   padding: 16,
  //   borderRadius: 8,
  //   borderWidth: 1,
  //   borderColor: secondary,
  //   backgroundColor: '#FFF0F5',
  //   justifyContent: 'space-between',
  // },
  lightCard: {
    backgroundColor: '#fff',
  },
  darkCard: {
    backgroundColor: 'transparent',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: secondary,
  },
  cardHeaderGreen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  cardIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    backgroundColor:'transparent'
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    backgroundColor:'transparent'

  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor:'transparent',
    gap:20,
    marginVertical: 10,
  },
  Row: {
    flexDirection: 'row',
    // alignItems: 'center',
    // alignContent: 'center',
    // justifyContent: 'center',
    justifyContent: 'space-between',
    gap:20,
    marginVertical: 10,
  },
  profilecontainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  profileheader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },

  editButton: {
    backgroundColor: secondary,
    padding: 10,
    borderRadius: 50,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 40, // Espacio adicional arriba del nombre
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: secondary,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10, // Espacio entre la imagen y el nombre
  },
  email: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  actions: {
    marginTop: 20,
    alignItems: 'center',
  },
  actionButton: {
    backgroundColor: secondary,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonblack: {
    backgroundColor: secondary,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
    marginVertical: 10,
    padding:10,
  },
  buttonblacks: {
    backgroundColor: secondary,
    borderRadius: 200,
    marginVertical: 10,
    padding: 10
  },
  buttonblues: {
    backgroundColor: primary,
    borderRadius: 200,
    marginVertical: 10,
    padding: 10
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  tab: {
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 12,
    color: '#333',
    marginTop: 2,
  },
  line: {
    height: 10, // Altura de la línea
    backgroundColor: primary , // Color de la línea
    width: '50%', // Ancho completo
    borderRadius:20
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(57, 117, 230, 0.38)',
    justifyContent: 'center',
    alignItems: 'center',
    height:'100%'
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    height: '90%',
    bottom:-50
  },
  modalAlert: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  modalButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  modalButtonText: {
    color: primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  cartItemText: {
    fontSize: 16,
    color: '#333',
  },
  removeButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  circle:{
    backgroundColor:secondary,
    width:30,
    height:30,
    alignContent:'center',
    textAlign:'center',
    alignItems:'center',
    textAlignVertical:'center',
    borderRadius:200,
    bottom:-20,
    left:10
  },
  mapcontainer: {
    flex: 1,
  },
  map: {
    flex: 1,
    width:500,
    height:500
  },
  minimap: {
    alignSelf:'center',
    flex: 1,
    width:'90%',
    height:100
  },
  mapContainer: {
    width: '90%',
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  marker:{
    color:'black',
    height:200,
    padding:20
  },
  imageBackground: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end', // Contenido en la parte inferior
    bottom:80
  },
  imageStyle: {
    borderRadius: 10, // blackondeo de bordes en la imagen
  },
  cardContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente para el texto
    padding: 10,
  },
  placeholder: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalContents: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
},
modalTitles: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: secondary,
},
modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
},
modalButtons: {
    backgroundColor: secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
},
modalButtonTexts: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
},
});
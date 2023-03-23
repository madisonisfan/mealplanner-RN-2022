import { Provider } from "react-redux";
import { store } from "./redux/store";
import { DefaultTheme } from "react-native-paper";
import AppInner from "./components/AppInner";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: "transparent", // Use transparent to disable the little highlighting oval
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <AppInner />
    </Provider>
  );
}

/*
import { Provider } from "react-redux";
import { store } from "./redux/store";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: "transparent", // Use transparent to disable the little highlighting oval
  },
};

export default function AppInnner() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}


*/

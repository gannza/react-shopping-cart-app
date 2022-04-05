import {useState} from 'react';
import {useQuery} from 'react-query';

//Componets
import ItemComponent from './components/ItemComponent';
import  Drawer  from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
// import AddShoppingCartIcon  from '@material-ui/icons/AddShoppingCartIcon';
// import Badge  from '@material-ui/icons/Badge';

//Styles
import {Wrapper} from "./styles/App.styles"
//Services
import {getProducts} from './services/productService';
//Interface
import { CartItemType } from './interfaces/CartItem';
function App() {

  const {data,isLoading,error} = useQuery<CartItemType[]>(
    'products',
    getProducts
    );
    console.log(data);
    const getTotalItems=()=>null;
    const handleAddToCart=(clickedItem:CartItemType)=>null;
    const handleRemoveToCart=()=>null;

    if(isLoading) return <LinearProgress />;

    if(error) return <div> Something went wrong</div>;
     

    return (
      <Wrapper>
        <Grid container spacing={3}>
            {data?.map(item=>(
                 <Grid item key={item.id} xs={12} sm={4}>
                    <ItemComponent item={item} handleAddToCart={handleAddToCart} />
                 </Grid>
            ))}
        </Grid>
    </Wrapper>

    )
}

export default App;

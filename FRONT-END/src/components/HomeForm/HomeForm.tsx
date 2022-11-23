import Box from "@mui/material/Box";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { ReactElement, JSXElementConstructor, useState, useEffect } from "react";
import { OrderFormType } from "../../types/AllTypes";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";
import { addOrder, addOrderFormAsync } from "../../redux-toolkit/OrderFormSlice";
import { cars1, getCarAsync } from "../../redux-toolkit/CarSlice";
import './HomeForm.css'

const HomeForm = () => {

    const dispatch = useAppDispatch();
    const allCars = useAppSelector(cars1);

    useEffect(()=>{
      dispatch(getCarAsync());
    },[])


    const[carType,setCarType]=useState<string | undefined>();
    const[fromDate,setFromDate]=useState<string | undefined>();
    const[toDate,setToDate]=useState<string | undefined>();

    
  const handleChange = (event: SelectChangeEvent) => {
    setCarType(event.target.value as string);
  };

    const newObj:OrderFormType = {
      _id:undefined,
        carType:'',
        fromDate:undefined,
        toDate:undefined
    }

    const onSubmit=(e:any)=>{
        newObj.carType = carType;
        newObj.fromDate =fromDate;
        newObj.toDate = toDate;

        // dispatch(addOrder(newObj));
        dispatch(addOrderFormAsync(newObj))
        e.preventDefault();
    }
 

    return (
      <>
       
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#FFB74E",
              justifyContent: "space-around",
            }}
          >
            <Box sx={{ backgroundColor: "#FFC776", my: "6rem", p: "0.5rem" }}>
              <Box
              onSubmit={(e) => onSubmit(e)}
                component="form"
                noValidate
                autoComplete="off"
                sx={{ backgroundColor: "#FFFFFF" }}
              >
                <Box sx={{ mx: "auto", py: "3rem", width: "80%" }}>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        mb: "2rem",
                        fontFamily: "'Roboto', sans-serif;",
                        fontWeight: "bold",
                        fontSize: { xs: "1.5rem", lg: "2rem" },
                      }}
                    >
                      Renting a car has never been easier
                    </Typography>
                  </Box>

                  <Box>
                    {/* <TextField
                      fullWidth
                      margin="normal"
                      required
                      id="email-input"
                      label="Car Type"
                      onChange={(e) => setCarType(e.target.value)}
                    /> */}
                    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Car-Model</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    onChange={handleChange}
    label="Car-Type"
 
  >
    {allCars && allCars.map((item)=>(
 
       <MenuItem value={item.brand}>{item.brand}</MenuItem>
    ))}
 
  </Select>
</FormControl>
<Grid container  >
       
     
    
      {allCars.map((item)=>(
        item.brand === carType?<><Grid item xs={12} sm={8}   >
        <img src ={item.img}  className='imgD'/>
      </Grid>
      <Grid item xs={12} sm={4}  >
         <ul>
          <Typography  variant="subtitle1">SPECS</Typography>
         
          <li><Typography variant="overline">CarType:<span style={{color:'orange', fontWeight:'bolder'}}>{item.carType}</span></Typography></li>
          <li><Typography variant="overline">GPS: {item.gps===true?<span style={{color:'orange', fontWeight:'bolder'}}>Y</span>:<span style={{color:'orange', fontWeight:'bolder'}}>N</span>} - 4x4:{item._4x4===true?<span style={{color:'orange', fontWeight:'bolder'}}>Y</span>:<span style={{color:'orange', fontWeight:'bolder'}}>N</span>} </Typography></li>
          <li><Typography variant="overline">Brand:<span style={{color:'orange', fontWeight:'bolder'}}>{item.brand}</span></Typography></li>
          <li><Typography variant="overline">Model:<span style={{color:'orange', fontWeight:'bolder'}}>{item.carModel}</span></Typography></li>
          <li><Typography variant="overline">Engine:<span style={{color:'orange', fontWeight:'bolder'}}>{item.engCapacity}</span></Typography></li>
         </ul>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" align="center">{item.price.toFixed(2)} $</Typography>
        </Grid></> :''
      ))}
    
      {/* <Grid item xs={8}   >
        <img src ='https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/45057/taigun-exterior-right-front-three-quarter-2.jpeg?q=75'  className='imgD'/>
      </Grid>
      <Grid item xs={4}   >
         <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
         </ul>
      </Grid> */}
   
</Grid>
                  </Box>
                  <Box sx={{ display: "flex", mt: "1rem" }}>
                    <TextField
                      id="date"
                      label="From"
                      type="date"
                      defaultValue="2017-05-24"
                      sx={{ width: "50%" }}
                      InputLabelProps={{ shrink: true }}
                      onChange={(e) => setFromDate(e.target.value)}
                    />

                    <TextField
                      id="date"
                      label="To"
                      type="date"
                      defaultValue="2017-05-24"
                      sx={{ width: "50%", ml: "0.5rem" }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(e) => setToDate(e.target.value)}
                    />
                  </Box>

                  <Button
                    type="submit"
                    size="large"
                    variant="contained"
                    sx={{
                      mt: "2rem",
                      width: "100%",
                      backgroundColor: orange[500],
                      "&:hover": {
                        backgroundColor: orange[700],
                      },
                    }}
                  >
                    Reserve Now
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              component="img"
              sx={{
                height: 325,
                my: "auto",
                display: { xs: "none", lg: "flex" },
              }}
              alt="Black Tesla"
              src="images/tesla_black.png"
            />
          </Box>
     
      </>
    );
};

export default HomeForm;

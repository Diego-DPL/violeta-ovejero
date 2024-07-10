import React, { useState } from "react";
import { TextField, Button, IconButton, Grid, OutlinedInput, InputAdornment, FormControl, InputLabel } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function SingUp() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const textFieldStyles = {
    "& label": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#408494",
        borderRadius: "10px",
        borderWidth: "2px",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#408494",
      },
      "& .MuiOutlinedInput-input": {
        color: "white",
      },
    },
  };

  return (
    <>
      <div className="loggin grid grid-cols-2 h-[82vh] bg-bg1">
        <div>
          <h1 className="text-4xl text-white font-serif font-bold tracking-tightCustom text-left align-top w-[90%] mt-[20%] ml-[10%] leading-custom70">
            Nos preocupamos por tu salud mental
          </h1>
          <h2 className="text-custom30 text-customGray text-left align-top w-2/3 mt-[2%] ml-[10%]">
            Ofrecemos servicios de psicología personalizados. Nuestro equipo te ayuda a superar desafíos emocionales y mejorar tu bienestar mental.
          </h2>
        </div>
        <div className="loginSpace ml-[20%] mt-[5%] w-1/2">
          <h1 className="text-4xl text-white font-serif font-bold tracking-tightCustom text-center align-top w-[90%] leading-custom70">
            Registrarte
          </h1>
          <TextField
            label="Nombre"
            fullWidth
            margin="normal"
            required
            sx={textFieldStyles}
          />
          <TextField
            label="Apellidos"
            fullWidth
            margin="normal"
            required
            sx={textFieldStyles}
          />
          <TextField
            label="Nombre de Usuario"
            fullWidth
            margin="normal"
            required
            sx={textFieldStyles}
          />
          <TextField
            label="Correo Electronico"
            fullWidth
            margin="normal"
            required
            sx={textFieldStyles}
          />
          <FormControl fullWidth margin="normal" variant="outlined" sx={textFieldStyles}>
            <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Contraseña"
            />
          </FormControl>
          <FormControl fullWidth margin="normal" variant="outlined" sx={textFieldStyles}>
            <InputLabel htmlFor="outlined-adornment-password">Repite la Contraseña</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Repite la Contraseña"
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{
              marginTop: "5px",
              backgroundColor: "#E93A7D",
              borderRadius: "40px",
              paddingBottom: "10px",
              paddingTop: "10px",
            }}
          >
            Registrarse
          </Button>
        </div>
      </div>
    </>
  );
}

export default SingUp;
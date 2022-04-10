import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
}
  
function QuiltedImageList(props) {
  let imagesData = props.info
  let parsedImagesData = imagesData.filter(image => image != null)
  console.log("EL imagesData(prop.info))" + JSON.stringify(parsedImagesData))
  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {parsedImagesData.map((item) => (
        <ImageListItem key={item.url} cols={2} rows={2}>
          <img
            {...srcset(item.url, 121, 1, 1)}
            alt={"test"}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default QuiltedImageList;
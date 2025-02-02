# sweng-group-4
Shutterstock - AI Powered Multilingual Image Search

## Live Demonstration

https://drive.google.com/file/d/1hBUREdalv_z0zpfwMyiruD9xUNjooUs2/view

## Project Overview:
You can access our 41k Mulitilingual Image Search here: [http://3.8.29.221/](http://3.8.29.221/)

Alternatively you can pull the repo, and follow the steps below under the heading 'How to run' to run the program locally, this will only support the animals data set which is ~5k images.

Notes:

The website will not fully function correctly if you are on the Trinity network, this is due to Trinity blocking various ports.

The 41k Dataset which is in use (in the AWS hosted EC2, the public website link above) is available to download at [2017 test images (41k)](https://cocodataset.org/#download), bear in mind it is over 6GBs just to download it.

## Project Features

### Search Images

Using the side nav bar, you can head to the search page. From here, you can search our temporary database of animals. For good queries, we suggest:

1. "angry animal"
2. "water animal"
3. "a photo of a cat"

### Upload Images

Using the side nav bar, you can head to the upload page. Select a photo from your local device, add a user author tag, and then press upload. You can then search for your uploaded photo using the search page.

### Translation

Any user input in the search bar is automatically translated to English. Try the following queries:

1. "die Katze" (German: the cat)
2. "une photo d'un dauphin" (French: a photo of a dolphin)

## How to run:

Firstly, clone the repository to your device.

Download the sample animal images dataset [here](https://www.kaggle.com/datasets/iamsouravbanerjee/animal-image-dataset-90-different-animals/download?datasetVersionNumber=5).

Unzip it, and move the animals/animals/ folder to

```
sweng-group-4/public/
```

Double check the path is correct, for example, you should find the dog/ images folder at

```
sweng-group-4/public/animals/animals/dog/
```

In the base repo directory (sweng-group-4/), run the following commands to install the requirements:

```
pip install -r requirements.txt
```
```
pip install flask-cors
```
There is no need to embed all images, as .sqlite file with all the vectors is already provided. 

Now, run the following command to start the backend:

```
python app.py
```

Then, in a separate terminal cd to:

```
src/
```

If you haven't done so already, install dependancies for the frontend:

```
npm install
```

To run the frontend, run:

```
npm start
```

In the browser a page should open to view the project.

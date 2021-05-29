import icons from 'url:../../img/icons.svg'; //parcel2
import previewView from './previewView.js';
import View from './View.js';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'No recipes found. Try another one!';
  _message = '';
  _generateMarkup() {
    //this._data contains all info from View.js
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();

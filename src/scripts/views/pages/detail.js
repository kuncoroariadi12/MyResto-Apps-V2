const detail = {
    async render() {
        return `
        <div class="load"></div>
        <article class="content">
          <div id="result"></div>
          <div id="likeButtonContainer"></div>
          <div class="customer-reviews">
          <h2 class="add-review_title">Add New Review</h2>
            <div class="review__form">
              <div class="input_form">
                <div class="review_form_name">
                    <label for="name">Name</label><br>
                    <input type="text" name="name" id="reviewerName" placeholder="Input your name" required>
                </div>
                <div class="review_form_content">
                    <label for="content">Review</label><br>
                    <textarea name="content" id="reviewContent" placeholder="Input your review" required></textarea>
                </div>
              </div>
              <button class="submit" id="submit" aria-label="Submit my review">Add Review</submit>
            </div>
          </div>
        </article>
        `;
    },

    async afterRender() {
        // asdas
    }
};

export default detail;
